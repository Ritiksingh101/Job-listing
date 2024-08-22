// const UserDetail = require("./models/UserDetail");
// const { genrateToken } = require("./utils/jwt");
// const bcrypt = require("bcryptjs");
// const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   const userDetail = await UserDetail.findOne({ email });
//   if (user) {
//     let isMatch = await bcrypt.compare(password, userDetail.password);
//     if (isMatch) {
//       let token = genrateToken(userDetail);
//       res.json({ token, email: user.email, password: user.password });
//     } else {
//       res.status(401).json({ message: "Invalid email or password" });
//     }
//     res.status(401).json({ message: "Invalid email or password" });
//   }
// };
