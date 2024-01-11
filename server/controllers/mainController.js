// Get / Homepage

exports.homepage = async (req, res) => {
    const locals = {
        title: "NodeJs Notes",
        description: "Free NodeJs Notes App.",
    }

    res.render('index', locals)
}


// Get /about 

exports.about = async(req, res) => {
    const locals = {
        title: "About - NodeJs Notes",
        description: "Free NodeJsNotes App",
    }
    res.render("about", locals);
}