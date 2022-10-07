import axios from 'axios';

export default class ListsService {
  static async getLists() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

    return response.data;
  }
}
