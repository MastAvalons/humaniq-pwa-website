import webpackAssets from './webpackAssets';

export default function(req, res){
  res.status(200);
  res.render('index', {webpackAssets})
}