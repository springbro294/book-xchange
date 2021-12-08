const proxy_server_url= 'https://young-island-58664.herokuapp.com/'
const url= proxy_server_url+ 'api-gateway-895014887.us-east-1.elb.amazonaws.com';
const Url= {
    home_url: '',
    login_url: url + '/auth/login',
    signup_url: url + '/user/signup',
    refreshToken_url: url+ '/auth/refreshToken',
    book_url: url + '/books/all',
    add_book: url + '/books/addBook',
    book_by_ID: url + '/books/byID'
};
export default Url;

