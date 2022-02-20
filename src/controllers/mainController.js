const controller = 
{
    	index: (req, res) => {	
                return res.render('index');
        },

        product: (req, res) => {
                return res.render("detalleMenu");
        }   
}

module.exports = controller;
