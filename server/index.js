const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const marksRoutes = require('./router/markRoute');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect('mongodb+srv://sanooppr:sanooppr60@cluster0.y2jlf4t.mongodb.net/student-mark?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(error => {
  console.error('Error connecting to MongoDB:', error);
});

// Use marks routes
app.use('/marks', marksRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.get('/',(req,res)=>{
    res.send("bank server started!!!")
})