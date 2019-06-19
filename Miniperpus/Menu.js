

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './login';
import Main from './Main';
import SignIn from './signIn'
import Home from './home';
import Kategori from './kategori';
import Detailkategori from './detailKategori';
import Buku from './buku';

import Qr from '../QR/qr';
import Pinjam from './pinjam';
import Profil from './profil';
import Riwayat from './riwayat';
import Editprofil from './editprofil';
import Kembali from './kembali';


const AppNavigator = createStackNavigator(
{
    Utama: Main,
    Layar1: Login,
    Layar2: SignIn,
    Layar3: Home,
    Layar4: Kategori,
    Layar5: Detailkategori,
    Layar6: Buku,  
    Layar7: Qr,
    Layar8: Pinjam,
    Layar9: Profil, 
    Layar10: Riwayat,
    Layar11: Editprofil,
    Layar12: Kembali,

  },

    {initialRouteName: "Utama"}
);
export default createAppContainer(AppNavigator);



