import { client } from '@/feature/sanity';
import { signUpHandler } from 'next-auth-sanity';

export default signUpHandler(client);