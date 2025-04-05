import express from 'express';

const app = express();
const port = 3000;
const val = 10000000000;

app.get('/', (req, res) => {
    res.send('Hello from Pod');
})

app.get('/cpu', (req, res) => {
    // cpu intensive task
    let c = 0;
    for(let i=0; i<val; i++){
        c += 1;
    }
    res.send('Cpu intensive task completed!');
});

app.listen(port, () => console.log(`App listening on port ${port}`));

