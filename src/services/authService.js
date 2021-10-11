import axios from '../utils/axios';

class AuthService {
    sigin = (email, password) => {
        return new Promise((resolve, reject) => {
            axios.post('/api/home/login', {email, password})
            .then(response => {
                if(response.data.user) {
                    this.setUser(response.data.user)
                    resolve(response.data.user)
                } else {
                    reject(response.data.error)
                }
            })
            .catch(error => {
                reject(error)
            })
        })
    }

    setUser = (user) => {
        localStorage.setItem("user", user);
    }

    getUser = () => {
        const user = localStorage.getItem("user");
        if (user) {
            return JSON.parse(user);
        }
        return user;
    }

    isAuthenticated = () => !!this.getUser();
    
}

const authService = new AuthService();

export default  authService;