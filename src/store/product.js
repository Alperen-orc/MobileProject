import { ToastAndroid } from "react-native";
import { makeObservable,observable,action,runInAction } from "mobx";

import {categories} from "../data/categories"
import {cart} from "../data/cart"
import products from "../data/products";
import {wishlist} from "../data/wishlist"


class Product {

  state = {
    allProducts: [],
    searchedProducts: [],
    products: [],
    product: {},
    categories: [],
    category: null,
    cart: cart,
    wishlist: wishlist,
  };

  
  constructor() {
    


    makeObservable(this, {
      state: observable,
      fetchData:action,
      getCategories: action,
      getProducts: action,
      getProductsByCategories: action,
      getSearchedProducts: action,
      getRandomProducts: action,
      addToCart: action,
      addToWishlist: action,
      removeFromWishlist: action,
      setCategory: action,
      setProduct: action,
    });
  }

  fetchData = async () => {
    try {
      // products fonksiyonunu çağırarak verileri al
      const fetchedProducts = await products();
      runInAction(() => {
        // Verileri state'e at
        this.state.allProducts = fetchedProducts;
        console.log(Array.isArray(this.state.allProducts))
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      // Hata durumunu ele al veya gerekirse kullanıcıya bir bildirim göster
    }
  };

  createToast = message => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      0,
      50,
    );
  };

  shuffle = a => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  getCategories = async () => {
    this.state.categories = categories;
  };

  getProducts = async () => {
    this.state.products = this.shuffle(products);
    this.state.allProducts = this.shuffle(products);
  };

  getProductsByCategories = async id => {
    if (id === null) {
      this.state.searchedProducts = this.shuffle(this.state.allProducts);
    } else {
      this.state.searchedProducts = this.shuffle(
        this.state.allProducts.filter(x => x.Category === id),
      );
    }
  };

  getSearchedProducts = text => {
    this.state.searchedProducts = this.shuffle(
      this.state.allProducts.filter(x =>
        x.Name.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  };

  getRandomProducts = async () => {
    try {
      const fetchedProducts = await products();
      const shuffledProducts = this.shuffle(fetchedProducts.slice(0, 6));
  
      runInAction(() => {
        this.state.allProducts = shuffledProducts;
      });
  
      if (!Array.isArray(shuffledProducts) || shuffledProducts.length === 0) {
        console.log("Array Boş veya Tanımsız");
        runInAction(() => {
          this.state.allProducts = [];
        });
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      runInAction(() => {
        this.state.allProducts = [];
      });
    }
  
    return this.state.allProducts;
  };

  setCategory = id => {
    this.state.category = id;
  };

  setProduct = data => {
    this.state.product = data;
  };

  addToCart = product => {
    if (this.state.cart.find(x => x.product.id === product.id)) {
      this.createToast('Already in cart');
    } else {
      this.state.cart = [...this.state.cart, {product: product, quantity: 1}];
      this.createToast('Added to cart');
    }
  };

  updateCartQuantity = (id, quantity) => {
    if (quantity === 0) {
      this.state.cart = this.state.cart.filter(x => x.product.id !== id);
    } else {
      this.state.cart = this.state.cart.map(x =>
        x.product.id === id ? {...x, quantity: quantity} : x,
      );
    }
  };

  addToWishlist = product => {
    if (this.state.wishlist.find(x => x.id === product.id)) {
      this.createToast('Already in wishlist');
    } else {
      this.state.wishlist = [...this.state.wishlist, product];
      this.createToast('Added to wishlist');
    }
  };

  removeFromWishlist = id => {
    this.state.wishlist = this.state.wishlist.filter(x => x.id !== id);
  };
}

export const ProductStore = new Product();
