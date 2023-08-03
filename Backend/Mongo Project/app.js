import mongoose, { Schema } from 'mongoose';

const connectDatabase = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1/fruits', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

const blogPostSchema = new Schema({
  author: String,
  title: String,
  body: String,
  numPage: Number,
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

const saveBlogPost = async () => {
  const dailySH = new BlogPost({
    author: 'Athur Conan Doyle',
    title: 'Baskerville HOUND',
    body: 'Lorem ipsum',
    numPage: 30,
  });

  try {
    await dailySH.save();
    console.log('Blog post saved successfully.');
  } catch (error) {
    console.error('Error saving blog post:', error);
  } finally {
    mongoose.connection.close();
  }
};

const main = async () => {
  await connectDatabase();
  await saveBlogPost();
};

main();