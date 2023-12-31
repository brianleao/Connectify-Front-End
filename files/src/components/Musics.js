import styles from './Musics.module.css'
import NavBar from './NavBar'
import MusicMain from './music_images/image_main.png'
import {IoStarHalf} from "react-icons/io5"
import Player from './Player'
import {IoReorderThree} from 'react-icons/io5'
import BottomBar from './BottomBar'
import request from '../services/services'
import Search from './Search'
import { useContext } from 'react'
import { PlayerContext } from '../contexts/PlayerContext'

export default function Musics() {
    const { dadosMusica } = useContext(PlayerContext)

    
    function adicionarMusicaPlayList() {
        alert('A música foi adicionada na playlist!')
    }

    return (
        <div>
            <NavBar/>
            <div className={styles.infos}>
                <h1>Música</h1>
                <span>Playlist Best of Rock - 2000</span>
            </div>
            
            <div className={styles.containerPrimary}>
                <div className={styles.container_main}>
                        <img src={MusicMain} className={styles.img_music}/>
                    
                    <div className={styles.music_infos}>
                        <h2 className={styles.music_name}>{dadosMusica.nome_musica}</h2>
                        <p className={styles.singer_name}>Red Hot Chili Peppers</p>
                    </div>
                </div>
                <div className={styles.playerMusic}>
                    <Player/>
                    <IoReorderThree className={styles.iconAddPlaylist} onClick={adicionarMusicaPlayList}/>
                </div>
            </div>
            <BottomBar/>
        </div>
    )
}