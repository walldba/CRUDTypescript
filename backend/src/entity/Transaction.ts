export default class Transaction {
  clientName: string;
  authorName: string;
  bookName: string;
  price: string;
  constructor(
    clientName: string,
    authorName: string,
    bookName: string,
    price: string
  ) {
    this.clientName = clientName;
    this.authorName = authorName;
    this.bookName = bookName;
    this.price = price;
  }
}
