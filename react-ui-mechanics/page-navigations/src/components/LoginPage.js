export const LoginPage = (props) => {

    return (<div className={'page-container'}>I'm a LoginPage
        <button onClick={(e)=>props.handlePageChange('mainPage')}>Logout</button>
    </div>)
}
