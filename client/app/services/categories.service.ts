import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService{
    constructor(private http:Http){
        console.log('Task Service Initialized...');
    }

    getCategories(){
        return this.http.get('/api/categories')
            .map(res => res.json());
    }
    
    addCategory(newCategory){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/category', JSON.stringify(newCategory), {headers: headers})
            .map(res => res.json());
    }
    
    deleteCategory(id){
        return this.http.delete('/api/category/'+id)
            .map(res => res.json());
    }
    
}