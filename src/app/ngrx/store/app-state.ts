import { Account } from 'models/account';
import { Layout } from 'store/layout';

export interface AppState {
    account: Account;
    layout: Layout;
}
