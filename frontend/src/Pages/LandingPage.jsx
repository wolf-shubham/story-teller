import React from 'react'
import logo from '../Images/writer.png'
import { Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import SendIcon from '@mui/icons-material/Send'

const LandingPage = () => {
    const tweet = ['test quote 1', 'test quote 2', 'test quote 3', 'test quote 4', 'test quote 5']

    const history = useNavigate()

    let x = Math.floor(Math.random() * (tweet.length + 1))

    return (
        <div className='landingPageContainer'>
            <div className="iconLandingPage">
                <img src={logo} alt="logo" />
                <h1>story teller...</h1>
            </div>
            <div className="landingText">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis excepturi eum recusandae nihil dolor officiis!</h2>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => history('/login')}
                    endIcon={<SendIcon />}
                >get started!
                </Button>
            </div>
            <div className="quote">
                <div className="quoteText">
                    <h3>{tweet[x]}</h3>
                </div>
            </div>
        </div>
    )
}

export default LandingPage