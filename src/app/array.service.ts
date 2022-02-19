import { Users } from './Users-model';
import { eshop } from './eshop-model';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { DataModel } from './data-model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Injectable({
  providedIn: 'root'
})
export class ArrayService {
  posts: DataModel[] = [];

  Updatelistener = new Subject<DataModel[]>()
  private subject = new Subject<any>();
  constructor(private http: HttpClient, private router: Router) { }


  AddDataEntry(Name: string, Date: string, Delivered: string, EmptyRecived: string, Balanced: string, CashRecived: string, CashBalanced: string) {
    const post: DataModel = {
      _id: null, Name: Name, Date: Date, Delivered: Delivered, EmptyRecived: EmptyRecived, Balanced: Balanced, CashRecived: CashRecived, CashBalanced: CashBalanced
    }
    this.http
      .post<{ message: string, id: string }>("http://localhost:3000/api/posts/kansaz", post)
      .subscribe(responseData => {
        const id = responseData.id;
        post._id = id;
        this.posts.push(post);
        this.Updatelistener.next([...this.posts]);
      });
  }

  getDataEntry() {
    this.http
      .get<{ message: string; documents: any }>(
        "http://localhost:3000/api/posts/kansaz"
      )
      .pipe(map((postData) => {
       
        return postData.documents?.map(post => {
          return {

            Name: post.Name,
            Date: post.Date,
            Delivered: post.Delivered,
            EmptyRecived: post.EmptyRecived,
            Balanced: post.Balanced,
            CashRecived: post.CashRecived,
            CashBalanced: post.CashBalanced,
            _id: post._id
          };
        });
      }))

      .subscribe(transformedPosts => {
        this.posts=transformedPosts
        console.log(this.posts)
        this.Updatelistener.next([...this.posts]);

      })

  }
  getUpdatelistener() {
    return this.Updatelistener.asObservable();
  }

  getData(id: string) {
    return this.http.get<{ _id: string, Name: string, Date: string, Delivered: string, EmptyRecived: string, Balanced: string, CashRecived: string, CashBalanced: string }>(
      "http://localhost:3000/api/posts/kansaz/" + id
    );

  }


  updateData(id: string, Name: string, Date: string, Delivered: string, EmptyRecived: string, Balanced: string, CashRecived: string, CashBalanced: string) {
    console.log(id)
    const post: DataModel = { _id: id, Name: Name, Date: Date, Delivered: Delivered, EmptyRecived: EmptyRecived, Balanced: Balanced, CashRecived: CashRecived, CashBalanced: CashBalanced };
    this.http
      .put("http://localhost:3000/api/posts/kansaz/" + id, post)
      .subscribe(response => {
        const updatedPosts = [...this.posts];
        const oldPostIndex = updatedPosts.findIndex(p => p._id === post._id);
        updatedPosts[oldPostIndex] = post;
        this.posts = updatedPosts;
        this.Updatelistener.next([...this.posts]);
        this.router.navigate(["/table"]);

      });
  }

  deletePost(id: string) {
   
    this.http.delete("http://localhost:3000/api/posts/kansaz/" + id)
      .subscribe(() => {
        const updatedPosts = this.posts.filter(post => post._id !== id);
        this.posts = updatedPosts;
        this.Updatelistener.next([...this.posts]);
        this.router.navigate(["/table"]);

      });
  }

 


}




