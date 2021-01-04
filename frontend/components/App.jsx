import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import loginFormContainer from './sessions/login_form_container';
import signupFormContainer from './sessions/signup_form_contaner';
import { AuthRoute } from '../util/route_util';
import NavContainer from './navcontainer/NavContainer';
import HomePage from './Homepage/Homepage'
import Modal from './modal/modal';
import UserShowPage from './Homepage/user_show_page';
import RestaurantShowPage from './restaurants/restaurant-show';
import RestaurantSearchIndex from './restaurants/restaurant_search/restaurant_search_index';
import ReviewForm from './reviews/review_form';

const App = () => (

    <>
        <header className='hbar'>
            <Link to="/" className="logo"> 
                <img src={OuverteURL} height="45"/>
                {/* <svg width="175" height="56" viewBox="0 0 395 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.7762 59.026H23.5205L38.4791 21.562H27.2939V16.441H60.7149V21.562H49.3949L64.6231 59.026H58.6935L43.8696 22.2358L28.7762 59.026Z" fill="black" stroke="black" stroke-width="0.269525"/>
                        <rect x="14.6262" y="42.3154" width="59.026" height="5.12097" fill="black"/>
                    <path d="M125.812 20.776L125.854 21.742C125.854 23.002 125.756 24.626 125.56 26.614C125.364 28.602 125.14 30.198 124.888 31.402H120.394L119.722 24.934L115.984 24.514V46.018L119.848 46.69L119.806 49H103.426L103.174 47.656C104.042 46.956 105.372 46.172 107.164 45.304V24.514L103.342 24.934L102.67 31.402H98.218C97.574 28.462 97.252 25.312 97.252 21.952L97.294 20.776L111.616 20.944L125.77 20.776H125.812ZM147.854 46.27L141.848 49.714C139.944 49.714 138.376 48.678 137.144 46.606L132.776 49.504L131.18 49.63C129.304 49.63 127.736 49.084 126.476 47.992C125.216 46.872 124.586 45.57 124.586 44.086C124.586 43.134 124.88 42.196 125.468 41.272C126.084 40.32 126.98 39.55 128.156 38.962L136.052 38.794V35.644C136.052 33.572 135.422 32.2 134.162 31.528C133.546 31.584 133.028 31.724 132.608 31.948L131.39 36.652L126.602 36.694C126.126 35.07 125.888 33.502 125.888 31.99L126.056 29.932C127.848 29.288 129.864 28.77 132.104 28.378C134.372 27.986 136.192 27.79 137.564 27.79C140.28 27.79 142.422 28.826 143.99 30.898C144.326 31.402 144.494 32.69 144.494 34.762V43.162C144.494 44.03 144.83 44.464 145.502 44.464L146.888 44.422L147.728 44.38L147.854 46.27ZM132.818 43.456C132.818 44.156 133.028 44.744 133.448 45.22L136.052 44.674V41.524C133.896 41.524 132.818 42.168 132.818 43.456ZM162.934 28.252L164.32 28.126C166.616 28.126 168.492 29.036 169.948 30.856C171.432 32.676 172.174 35 172.174 37.828C172.174 41.356 171.026 44.226 168.73 46.438C166.434 48.65 163.354 49.756 159.49 49.756C156.634 49.756 153.526 49.238 150.166 48.202L150.208 48.16V22.582L147.058 21.784L146.974 19.684C149.634 18.76 152.7 18.214 156.172 18.046L158.65 20.314V31.486L162.934 28.252ZM161.254 45.472C162.738 43.932 163.48 41.86 163.48 39.256C163.48 37.716 163.13 36.414 162.43 35.35C161.758 34.286 160.834 33.754 159.658 33.754L158.65 33.88V45.388L160.204 45.556L161.254 45.472ZM183.985 45.304C185.189 45.808 186.197 46.354 187.009 46.942L186.967 49H172.393L172.351 47.53C173.247 46.97 174.311 46.452 175.543 45.976V22.582L172.393 21.784L172.309 19.684C174.969 18.76 178.035 18.214 181.507 18.046L183.985 20.314V45.304ZM205.677 39.802L195.219 39.76C195.499 41.272 196.157 42.434 197.193 43.246C198.229 44.058 199.517 44.464 201.057 44.464C202.597 44.464 204.375 43.918 206.391 42.826L207.567 45.43L200.931 49.462C200.091 49.63 199.251 49.714 198.411 49.714C195.219 49.714 192.573 48.734 190.473 46.774C188.401 44.786 187.365 42.224 187.365 39.088C187.365 35.896 188.443 33.222 190.599 31.066C192.755 28.91 195.373 27.832 198.453 27.832C201.309 27.832 203.633 28.7 205.425 30.436C207.245 32.144 208.155 34.44 208.155 37.324L205.677 39.802ZM197.613 31.654C196.493 32.41 195.709 33.936 195.261 36.232L200.637 35.854C200.497 34.762 200.147 33.824 199.587 33.04C199.055 32.228 198.397 31.766 197.613 31.654ZM223.26 20.188C227.432 20.188 230.876 21.602 233.592 24.43C236.308 27.258 237.666 30.926 237.666 35.434C237.666 39.802 236.364 43.302 233.76 45.934C231.156 48.538 227.754 49.84 223.554 49.84C219.242 49.84 215.742 48.496 213.054 45.808C210.366 43.12 209.022 39.592 209.022 35.224C209.022 30.828 210.352 27.23 213.012 24.43C215.7 21.602 219.116 20.188 223.26 20.188ZM220.572 25.144C219.872 25.844 219.298 26.992 218.85 28.588C218.43 30.184 218.22 32.088 218.22 34.3C218.22 37.744 218.766 40.46 219.858 42.448C220.95 44.436 222.434 45.43 224.31 45.43C224.786 45.43 225.304 45.318 225.864 45.094C226.648 44.254 227.278 42.98 227.754 41.272C228.23 39.536 228.468 37.618 228.468 35.518C228.468 32.494 227.978 29.932 226.998 27.832C226.018 25.732 224.59 24.682 222.714 24.682C222.042 24.682 221.328 24.836 220.572 25.144ZM265.07 46.27L259.022 49.714C258.098 49.686 257.202 49.364 256.334 48.748C255.466 48.104 254.752 47.236 254.192 46.144C251.98 47.824 249.852 49.014 247.808 49.714C246.8 49.826 245.666 49.616 244.406 49.084C243.174 48.552 242.166 47.684 241.382 46.48C241.046 45.948 240.864 44.646 240.836 42.574V32.368L237.686 31.57L237.602 29.512C240.29 28.56 243.356 28.014 246.8 27.874L249.278 30.1V40.852C249.278 43.204 250.272 44.296 252.26 44.128L253.268 43.96V32.158L251.126 31.402L251.042 29.344C253.422 28.448 256.152 27.958 259.232 27.874L261.71 30.1V43.162C261.71 44.03 262.046 44.464 262.718 44.464L264.104 44.422L264.944 44.38L265.07 46.27ZM287.791 30.982L285.943 32.242L280.861 44.59L278.971 48.874C277.795 49.21 276.241 49.378 274.309 49.378C273.161 49.378 272.195 49.308 271.411 49.168L265.321 32.956L262.591 31.108V28.756H272.881L275.989 38.752L276.577 41.524H277.039C277.599 37.436 278.033 33.18 278.341 28.756H287.749L287.791 30.982ZM305.468 39.802L295.01 39.76C295.29 41.272 295.948 42.434 296.984 43.246C298.02 44.058 299.308 44.464 300.848 44.464C302.388 44.464 304.166 43.918 306.182 42.826L307.358 45.43L300.722 49.462C299.882 49.63 299.042 49.714 298.202 49.714C295.01 49.714 292.364 48.734 290.264 46.774C288.192 44.786 287.156 42.224 287.156 39.088C287.156 35.896 288.234 33.222 290.39 31.066C292.546 28.91 295.164 27.832 298.244 27.832C301.1 27.832 303.424 28.7 305.216 30.436C307.036 32.144 307.946 34.44 307.946 37.324L305.468 39.802ZM297.404 31.654C296.284 32.41 295.5 33.936 295.052 36.232L300.428 35.854C300.288 34.762 299.938 33.824 299.378 33.04C298.846 32.228 298.188 31.766 297.404 31.654ZM325.034 37.954C322.962 36.162 321.282 35.14 319.994 34.888V44.8C321.954 45.5 323.508 46.214 324.656 46.942L324.614 49H308.444L308.402 47.53C309.354 46.942 310.404 46.438 311.552 46.018V32.368L308.402 31.57L308.318 29.512C311.006 28.56 314.072 28.014 317.516 27.874L319.994 31.57L322.934 28.126C323.466 27.958 324.054 27.874 324.698 27.874C325.958 27.874 327.12 28.21 328.184 28.882C329.248 29.526 329.948 30.408 330.284 31.528L325.034 37.954ZM341.356 34.342V42.112C341.356 43.204 341.902 43.75 342.994 43.75L346.186 43.582L346.354 45.808L338.92 49.714C337.38 49.77 335.994 49.322 334.762 48.37C333.558 47.39 332.942 46.228 332.914 44.884V34.3H329.638L329.596 31.948C330.632 30.996 331.892 30.016 333.376 29.008L335.896 23.254H339.676L341.062 29.092H346.774V31.486L344.632 34.342H341.356ZM366.089 39.802L355.631 39.76C355.911 41.272 356.569 42.434 357.605 43.246C358.641 44.058 359.929 44.464 361.469 44.464C363.009 44.464 364.787 43.918 366.803 42.826L367.979 45.43L361.343 49.462C360.503 49.63 359.663 49.714 358.823 49.714C355.631 49.714 352.985 48.734 350.885 46.774C348.813 44.786 347.777 42.224 347.777 39.088C347.777 35.896 348.855 33.222 351.011 31.066C353.167 28.91 355.785 27.832 358.865 27.832C361.721 27.832 364.045 28.7 365.837 30.436C367.657 32.144 368.567 34.44 368.567 37.324L366.089 39.802ZM358.025 31.654C356.905 32.41 356.121 33.936 355.673 36.232L361.049 35.854C360.909 34.762 360.559 33.824 359.999 33.04C359.467 32.228 358.809 31.766 358.025 31.654Z" fill="black"/>
                </svg> */}
            </Link>
       
            <NavContainer className="auth-route" />
        </header>


        

        <Switch>
            <Route path='/restaurants/:restaurantId' component={RestaurantShowPage}/>
            <Route path='/users/:userId' component={UserShowPage}/>
            <Route path='/restaurants' component={RestaurantSearchIndex}/>
            <Route path="/" component={HomePage}/>
        </Switch>
        
        <AuthRoute exact path="/signup" component={signupFormContainer}/>
        <AuthRoute exact path="/login" component={loginFormContainer}/>


    </>

);

export default App;