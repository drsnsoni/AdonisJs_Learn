// import { Request } from '@adonisjs/core/build/standalone';
import Route from '@ioc:Adonis/Core/Route'
import View from '@ioc:Adonis/Core/View';
//import PostsController from 'App/Controllers/Http/PostsController'
//import Database from '@ioc:Adonis/Lucid/Database'
// import ArticalesController from 'App/Controllers/Http/ArticalesController'

Route.get('/', ()=>{
  return View.render('welcome')
})

// Route.resource('news', 'ArticalesController');

Route.get('/news', 'ArticalesController.view'
  //fatch data from the DB
  // const articales = await Database.from('articales').select('*')
  // return view.render('news/new', {articales})
  // return new ArticalesController().view(ctx)
).as('indexpage')
Route.get('/news/create', 'ArticalesController.create').as('news_create');
Route.post('/news', 'ArticalesController.store').as('news_store');
Route.get('/news/:slug/edit', 'ArticalesController.edit').as('news_edit');
Route.patch('/news/:slug', 'ArticalesController.update').as('news_update');
Route.delete('/news/:slug', 'ArticalesController.destroye').as('news_delete');
// Route.patch('/ptch/:id', ({params}) => {
//   return {params}
// }).where("id", {
//   match: /^[0-9]+$/,
//   cast: (id) => Number(id),
// }).as('news_delete');

// Route.post('/news', ({request})=>{

//   return request.body();
//   // return view.render('news/create')
// }).as('news_store')



// Route.get('/posts/:id', async ({ params }) => {
//   return `Viewing post using id ${params.id}`
// }).where('id', /^[0-9]+$/)

// Route.get('docs/*', ({ params }) => {
//   console.log(params['*'])
// })

// Route.get('/drsn', async ({view}) => {

//   return view.render('news/new');
// })

// Route.get('docs/:category/*', ({ params }) => {
//   console.log(params.category)
//   console.log(params['*'])
// })

// Also can Write Like This url to simple view
// Route.on('/some').render('news.new')

// Route.post('/data', ({request, response})=> {
//   console.log(request.body());
//   // redirect to home page using response.redirect() function
//   return response.redirect('/');

// })



//Working with Controller

// Route.get('posts', 'PostsController.index')
