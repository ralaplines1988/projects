const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res, next)=>{
    const returedArr = getRandomElement(quotes);
    //console.log(returedArr);
    const sentQuote = {
      quote: returedArr
    };
    //console.log(sentQuote);
    res.send(sentQuote);
  });

  app.get('/api/quotes', (req, res, next)=>{
    if(req.query.person){
      //console.log(req.query.person);
      const targetArr = quotes.filter(element=>{
        return element.person.indexOf(req.query.person) > -1;
      });
      const resultArr = {
        quotes: targetArr
      };
      res.send(resultArr);
    } else {
    const allQuotes = {
      quotes: quotes
    };
    res.send(allQuotes);
    }
  });

  app.post('/api/quotes', (req, res, next)=>{
    if(!req.query.quote || !req.query.person){
      res.status(400).send();
    } else {
      quotes.push(req.query);
      res.send({
        quote: req.query
      })
    }
  });
  

app.listen(PORT, ()=>{
    console.log(`The server is running!`);
});

