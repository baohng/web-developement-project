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

const fruitsSchema = new Schema({
  name: String,
  score: Number,
  review: String
});

const Fruit = mongoose.model('Fruits', fruitsSchema);

const saveFruit = async () => {
  const apple = new Fruit({
    name: "Apple",
    score: 7,
    review: "Apple keep the doctor away."
  });
  const kiwi = new Fruit({
    name: "Kiwi",
    score: 10,
    review: "The Best Fruit!"
  });
  const orange = new Fruit({
    name: "Orange",
    rating: 6,
    review: "The Sour Fruit!"
  });
  try {
    await apple.save();
    await kiwi.save();
    await orange.save();
    console.log('Fruits saved successfully.');
  } catch (error) {
    console.error('Error saving fruits:', error);
  } finally {
    getAllFruit();
  }
};

const getAllFruit = async () => {
  try {
    const fruitsArray = await Fruit.find({}, {name: 1});
    fruitsArray.forEach(element => {
      console.log(element);
    });
  } catch (error) {
    console.log('Error read fruits', error);
  } finally {
    mongoose.connection.close();
  }
};

const main = async () => {
  await connectDatabase();
  await saveFruit();
};

main();