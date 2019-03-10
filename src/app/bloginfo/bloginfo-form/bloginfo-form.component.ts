import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { Router} from '@angular/router';
import {BlogService} from '../../blog.service';

@Component({
  selector: 'app-bloginfo-form',
  templateUrl: './bloginfo-form.component.html',
  styleUrls: ['./bloginfo-form.component.css']
})
export class BloginfoFormComponent implements OnInit {

  constructor( public blogService: BlogService) { }
  bloginfoform: FormGroup;
  ngOnInit() {
    this.bloginfoform = new FormGroup({
      'Title': new FormControl(null, {validators: [Validators.required]}),
      'Brief': new FormControl(null, {validators: [Validators.required]})
    });
  }
  onInfoFormSubmit(){
    if (this.bloginfoform.invalid){
      return;
    }
    console.log(this.bloginfoform);
    this.blogService.addBloginfo(this.bloginfoform.get('Title').value, this.bloginfoform.get('Brief').value);

  }

}
