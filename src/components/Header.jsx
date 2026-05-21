import chef_claude_icon from '../assets/chef-claude-icon.png'
import './Header.css'

export default function Header(){
    return(
        <header className='header'>
            <img className="chef-claude-icon" src={chef_claude_icon} alt="chef claude icon"/>
            <span className="title">Chef Claude</span>
        </header>
    )
}