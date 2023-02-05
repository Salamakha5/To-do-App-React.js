import "../css/footer.css"
function FooterCom(){
    return(
        <div className="footer_container border-top border-3 border-dark row m-0 p-2 d-flex justify-content-center align-items-center">
            <div className="col text d-flex justify-content-center align-items-center">
               Зроблено:<a href="https://www.linkedin.com/in/vladyslav-salamakha-6b0457253/" className="links">Salamaha Vlad</a>
            </div>
            <div className="col d-flex justify-content-center">
                <div><a href="https://www.linkedin.com/in/vladyslav-salamakha-6b0457253/"><i className="bi bi-linkedin me-4 fs-2"></i></a></div>
                <div><a href="https://github.com/Salamakha5"><i className="bi bi-github fs-2"></i></a></div>
            </div>
        </div>
    )
}
export default FooterCom