exports.getErrorPage = (req, res, next) => {
    res.status(404).render('404', { 
      pageTitle: '404: Page Not Found', 
      path:"/404" 
    });
  };


/*
Add the following tag in your 404 page

<img alt="404" 
     src="https://illustatus.herokuapp.com/?title=Oops,%20Page%20not%20found&fill=%234f86ed"/>
     
*/
