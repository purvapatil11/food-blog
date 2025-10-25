const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { email, id: existingUser._id },
      process.env.SECRET_KEY || "mysecretkey",
      { expiresIn: "1h" }
    );

    // Send response
    return res.status(200).json({ token, user: existingUser });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

