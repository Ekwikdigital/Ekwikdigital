const express = require("express");
const path = require("path");
const app = express();
// var mongoose = require("mongoose");
// const bodyparser =  require("body-parser");
// mongoose.connect('mongodb://local/host/spgymcontact', { useNewUrlParser: true },{ useUnifiedTopology: true });
const port = 10000;
const http = require('http');
const hostname = 'localhost';
// var contactSchema = new mongoose.Schema({
//     name: String,
//     address: String, 
//     phone: String,
//     email: String,
//     Textarea: String
// });
// var Contact = mongoose.model('Contact', contactSchema);

app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));

app.get('/', (req, res)=>{
    res.status(200).render('home.pug');
});

app.get('/aboutus', (req, res)=>{
    res.status(200).render('aboutus.pug');
});

app.get('/contact', (req, res)=>{
    res.status(200).render('contact.pug');
});

app.get('/ourwork', (req, res)=>{
    res.status(200).render('ourwork.pug');
});
app.get('/local-seo', (req, res)=>{
    res.status(200).render('local-seo.pug');
});
app.get('/seo-service', (req, res)=>{
    res.status(200).render('seo-service.pug');
});
app.get('/E-commerce', (req, res)=>{
    res.status(200).render('E-commerce.pug');
});
app.get('/mobile-seo', (req, res)=>{
    res.status(200).render('mobile-seo.pug');
});
app.get('/app-store-Packaging', (req, res)=>{
    res.status(200).render('app-store-pack.pug');
});
app.get('/SEO-Packages', (req, res)=>{
    res.status(200).render('seo-packages.pug');
});
app.get('/smo-packages', (req, res)=>{
    res.status(200).render('smo-packages.pug');
});
app.get('/local-seo-packages', (req, res)=>{
    res.status(200).render('local-seo-packages.pug');
});
app.get('/mobile-seo-packages', (req, res)=>{
    res.status(200).render('mobile-seo-packages.pug');
});
app.get('/orm-packages', (req, res)=>{
    res.status(200).render('orm-packages.pug');
});
app.get('/cro-packages', (req, res)=>{
    res.status(200).render('cro-packages.pug');
});
app.get('/ppc-packages', (req, res)=>{
    res.status(200).render('ppc-packages.pug');
});
app.get('/design-development-packages', (req, res)=>{
    res.status(200).render('design-development-pack.pug');
});
app.get('/content-writing-packages', (req, res)=>{
    res.status(200).render('content-writing-pack.pug');
});
app.get('/link-buliding-packages', (req, res)=>{
    res.status(200).render('link-building-pack.pug');
});
app.get('/content-marketing-packages', (req, res)=>{
    res.status(200).render('content-marketing-pack.pug');
});
app.get('/small-business-seo-packages', (req, res)=>{
    res.status(200).render('small-business-seo-pack.pug');
});
app.get('/digital-marketing-packages', (req, res)=>{
    res.status(200).render('digital-marketing-pack.pug');
});
app.get('/video-marketing-packages', (req, res)=>{
    res.status(200).render('video-marketing-pack.pug');
});
app.get('/seo-pricing', (req, res)=>{
    res.status(200).render('seo-pricing.pug');
});
app.get('/guest-posting-service', (req, res)=>{
    res.status(200).render('guest-posting-service.pug');
});
app.get('/seo-reseller', (req, res)=>{
    res.status(200).render('seo-reseller.pug');
});
app.get('/white-labelled-seo', (req, res)=>{
    res.status(200).render('white-labelled-seo.pug');
});
app.get('/seo-reseller-packages-plan', (req, res)=>{
    res.status(200).render('seo-reseller-packages-plan.pug');
});
app.get('/outsource-seo-india', (req, res)=>{
    res.status(200).render('outsource-seo-india.pug');
});
app.get('/corporate-reputation-managment', (req, res)=>{
    res.status(200).render('corporate-reputation-managment.pug');
});
app.get('/website-designing', (req, res)=>{
    res.status(200).render('website-designing.pug');
});
app.get('/web-development', (req, res)=>{
    res.status(200).render('web-development.pug');
});
app.get('/wordpress-development', (req, res)=>{
    res.status(200).render('wordpress-development.pug');
});
app.get('/responsive-design', (req, res)=>{
    res.status(200).render('responsive-design.pug');
});
app.get('/cms-development', (req, res)=>{
    res.status(200).render('cms-development.pug');
});
app.get('/custom-php-development', (req, res)=>{
    res.status(200).render('custom-php-development.pug');
});
app.get('/android-app-development', (req, res)=>{
    res.status(200).render('android-app-development.pug');
});
app.get('/logo-designing', (req, res)=>{
    res.status(200).render('logo-designing.pug');
});
app.get('/e-commerce-development', (req, res)=>{
    res.status(200).render('e-commerce-development.pug');
});
app.get('/website-redesigning', (req, res)=>{
    res.status(200).render('website-redesigning.pug');
});
app.get('/mobile-app-development', (req, res)=>{
    res.status(200).render('mobile-app-development.pug');
});
app.get('/magento-development', (req, res)=>{
    res.status(200).render('magento-development.pug');
});
app.get('/asp-dot-net', (req, res)=>{
    res.status(200).render('asp-dot-net.pug');
});
app.get('/social-media-marketing', (req, res)=>{
    res.status(200).render('social-media-marketing.pug');
});
app.get('/youtube-marketing', (req, res)=>{
    res.status(200).render('youtube-marketing.pug');
});
app.get('/ppc-service', (req, res)=>{
    res.status(200).render('ppc-service.pug');
});
app.get('/conversion-optimization', (req, res)=>{
    res.status(200).render('conversion-optimization.pug');
});
app.get('/app-store-optimization', (req, res)=>{
    res.status(200).render('app-store-optimization.pug');
});
app.get('/link-buliding-services', (req, res)=>{
    res.status(200).render('link-buliding-services.pug');
});
app.get('/seo-marketing-agency', (req, res)=>{
    res.status(200).render('seo-marketing-agency.pug');
});
app.get('/mobile-website-design', (req, res)=>{
    res.status(200).render('mobile-website-design.pug');
});
app.get('/online-marketing-company', (req, res)=>{
    res.status(200).render('online-marketing-company.pug');
});
app.get('/search-engine-marketing-service', (req, res)=>{
    res.status(200).render('search-engine-marketing-service.pug');
});
app.get('/portfolio', (req, res)=>{
    res.status(200).render('portfolio.pug');
});
app.get('/seo-packages', (req, res)=>{
    res.status(200).render('seo-packages.pug');
});
app.get('/website-designing', (req, res)=>{
    res.status(200).render('website-designing.pug');
});
app.get('/android-app-development', (req, res)=>{
    res.status(200).render('android-app-development.pug');
});
app.get('/seo-marketing-agency', (req, res)=>{
    res.status(200).render('seo-marketing-agency.pug');
});
app.get('/smo-packages', (req, res)=>{
    res.status(200).render('smo-packages.pug');
});
app.get('/ppc-service', (req, res)=>{
    res.status(200).render('ppc-service.pug');
});
app.get('/web-development', (req, res)=>{
    res.status(200).render('web-development.pug');
});
app.get('/portfolio', (req, res)=>{
    res.status(200).render('portfolio.pug');
});
app.get('/case-study', (req, res)=>{
    res.status(200).render('case-study.pug');
});
app.get('/seo-results', (req, res)=>{
    res.status(200).render('seo-results.pug');
});
app.get('/testimonials', (req, res)=>{
    res.status(200).render('testimonials.pug');
});
app.get('/terms&condition', (req, res)=>{
    res.status(200).render('terms&condition.pug');
});

app.post('/contact', (req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("I got your information and i will contact you soon")
    }).catch(()=>{
        res.status(404).send('ooppss... your information not saved');
    });
});

app.listen(port ,()=>{
    console.log('started on ' + port)
});


