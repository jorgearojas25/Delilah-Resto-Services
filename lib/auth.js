const jwt = require("jsonwebtoken");
const config = require("../config");
const response = require("../network/response");
const sign = config.sign;

const UnauthenticatedPaths = ["/login", "/usuario/signup", "/formasDePago", "/estadoPedido", "/rol"];
const OnlyAdminsPaths = [''];

const AutenticarUsuario = (req, res, next) => {  
    if (UnauthenticatedPaths.find(path => req.path == path)) {
        next();
      } else {
        try {
            if (!req.headers.authorization) {
              return response.error(
                req,
                res,
                "No te has identificado",
                401,
                `[${req.path} usuario no logueado]`
              );
            } else {
              try {
                const token = req.headers.authorization.split(" ")[1];
                const descifado = jwt.verify(token, sign);
                req.user = descifado;
                next();
              } catch (err) {
                return response.error(
                  req,
                  res,
                  "Error al autenticarte",
                  403,
                  `[Token auth]${err}`
                );
              }
            }
          } catch (err) {
            return response.error(
              req,
              res,
              "Error al autenticarte",
              403,
              `[Token auth]${err}`
            );
          }
      }
 
};

const AdminPath = (req, res, next) => {
    try {
        if (req.user.id_rol == 1) {
            next();
          } else {
            response.error(
              req,
              res,
              "No tienes permiso para estar aca",
              403,
              `[Token auth]`
            );
          }
    } catch (error) {
        return response.error(
            req,
            res,
            "Error al autenticarte",
            403,
            `[Token auth]${error}`
          );
    }
    
};

const signSomething = (something) => {
  return jwt.sign(something, sign);
};

module.exports = {
  sign: signSomething,
  authenticate: AutenticarUsuario,
  authorize: AdminPath,
};
