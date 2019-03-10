import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BlogService} from '../../blog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog-detail-form',
  templateUrl: './blog-detail-form.component.html',
  styleUrls: ['./blog-detail-form.component.css']
})
export class BlogDetailFormComponent implements OnInit {

  constructor(public blogService: BlogService) { }
  blogDetailForm: FormGroup;
  ngOnInit() {
    this.blogDetailForm = new FormGroup({
      'Title': new FormControl(null, {validators: [Validators.required]}),
      'Content': new FormControl(null, {validators: [Validators.required]})
    });
    this.blogDetailForm.patchValue({'Title': this.blogService.getTitle()});
  }
  onBlogSubmit(){
    if (this.blogDetailForm.invalid){
      return;
    }
    console.log(this.blogDetailForm);
    this.blogService.onblogdetailsformsubmit(this.blogDetailForm.get('Content').value);

  }

}
