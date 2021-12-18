module.exports = localsMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.siteName = "Video Storage";
    res.locals.loggedInUser = req.session.user || {};
    next();
  };


 /* export const protectorMiddleware = (req, res, next) => {
    if(req.session.loggedIn){
      return next()
    } else {
      req.flash("error", "Log in first.");
      return res.redirect("/login"); 
    }
  };

  export const publicOnlyMiddleware = (req, res, next) => {
    if(!req.session.loggerIn){
      return next();
    }else {
      req.flash("error", "Not authorized");
      return res.render("/")
    }
  }; */