import { makeObservable,observable,action,runInAction } from "mobx";
import { ToastAndroid } from "react-native";

class Auth {
    state = {
      isAuthenticated: false,
      isAdmin:false,
      user: null,
    };
  
    constructor() {
      makeObservable(this, {
        state: observable,
        login: action,
        register: action,
        logout: action,
      });
    }
  
    createToast = message => {
      ToastAndroid.showWithGravityAndOffset(
        message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        50,
      );
    };
  
    login = async (email,password) => {
      if(email==="alperen.oruc@ogr.sakarya.edu.tr"){
        this.state.isAdmin = true;
        this.state.isAuthenticated=true;
        this.createToast('Welcome Admin');
      }
      else{
        try {
          this.state.isAuthenticated = true;
          this.createToast('Logged in successfully');
        } catch (err) {
          this.state.isAuthenticated = false;
          this.createToast('Login failed');
        }
      }
      
    };
  
    register = async data => {
      try {
        this.state.isAuthenticated = true;
        this.createToast('Account created successfully');
      } catch (err) {
        this.state.isAuthenticated = false;
        this.createToast('Please enter correct data');
      }
    };
  
    logout = () => {
      this.state.isAuthenticated = false;
      this.createToast('Logged out');
    };
  }
  
  export const AuthStore = new Auth();
  