function Contact() {
    return (
        <div className="container">
           <form className="form" action="">
                <div className="form-control">
                    <label >Name:</label>
                    <input id="name" type="name" name="name"></input>
                </div>
                <div className="form-control">
                    <label>Email:</label>
                    <input id="email" type="email" name="email"></input>
                </div>
                <div className="form-control">
                    <label for="email">Query:</label>
                    <textarea id="query" type="query" name="query"></textarea>
                </div>
                <div className="btn">
                    <input className="btn-primary" type="submit" name="submit" value="Submit"/>
                    <input className="btn-secondary" type="reset" name="reset" value="Reset"/>
                </div>
            </form>
        </div>
    )
};

export default Contact;