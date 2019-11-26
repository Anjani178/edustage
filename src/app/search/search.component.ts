import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  technologies;
  timeStart;
  searchForm: FormGroup;
  s;
  get f(){
    return this.searchForm.controls;
  }
  search1(){
    this.s=this.sservice.searches(this.technologies,this.timeStart)
    // this.route.navigate(['/signUp']);
  }
  constructor( private route:Router,private sservice:SearchService,private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      technologies: [''],
      timeStart: [''],
  });
  }

}
