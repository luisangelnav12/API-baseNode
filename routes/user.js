const { Router } = require("express");
const {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
} = require("../controllers/user");
const router = Router();

// router.get("/", (req, res) => {
//   res.json({
//     message: "get API",
//   });
// });
router.get("/", usuariosGet);
router.put("/:id", usuariosPut);
router.post("/", usuariosPost);
router.delete("/", usuariosDelete);
// router.put("/", (req, res) => {
//   res.json({
//     message: "get API",
//   });
// });
// router.post("/", (req, res) => {
//   res.json({
//     message: "post API",
//   });
// });
// router.delete("/", (req, res) => {
//   res.json({
//     message: "delete API",
//   });
// });
// router.patch("/", (req, res) => {
//   res.json({
//     message: "patch API",
//   });
// });

module.exports = router;
