import { User } from '../users/models/user.model';
export default {
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'test',
  models: [User],
};
