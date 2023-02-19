//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import { Response } from '@adonisjs/core/build/standalone '
import Database from '@ioc:Adonis/Lucid/Database'
// import { schema } from '@ioc:Adonis/Core/Validator'
import CreateArticaleValidator from 'App/Validators/CreateArticaleValidator'

export default class ArticalesController {

  // public async index(){
  //   return "welcome"
  // }
    //help to Display Articales
  public async view({ view }){
    const articales = await Database.from('articales').select('*')
    return view.render('news/new', {articales})
  }

  //This Function help tu return view create page
  public async create({view}){
    return view.render('news/create')
  }

   // This Function Help us To store Data Into DataBase
  public async store({response, request}) {
        //Validation CreateArticaleValidator is Validator ==> app/validators
      const payload = await request.validate(CreateArticaleValidator)

      await Database.table('articales').insert(
        {
         ...payload,
         slug : payload.title,
        }
      )
      return response.redirect().back()

    // const {title,content,image} = request.body();
  }


  public async edit({ view, params }) {
    const {slug} = params;
    const articale = await Database.from('articales').where('slug', slug).first();
    return view.render('news/edit', {articale})
  }

  public async update({ request, response, params }){
    // const articale = await Database.from('articales').where('slug', slug).first();
    const payload = await request.validate(CreateArticaleValidator);
    await Database.from('articales').where('slug', params.slug).update(payload);
    return response.redirect('/news');
  }

  public async destroye({params, response}){
    await Database.from('articales').where('slug', params.slug).delete();
    return response.redirect().back();
  }
}
