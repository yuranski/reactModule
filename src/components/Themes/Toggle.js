import {Button} from "react-bootstrap";

export function Toggle({themeToggler}) {
    return (
            <Button className='mLeft10' onClick={themeToggler} variant="light">Theme</Button>
    )
}