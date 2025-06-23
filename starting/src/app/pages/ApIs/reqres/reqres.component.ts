import { httpResource } from '@angular/common/http';
import { ReqresService } from './../../../_services/reqres.service';
import { Component, inject, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IReqRes } from '../../../_shared/interfaces/reqres';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reqres',
  imports: [CommonModule],
  templateUrl: './reqres.component.html',
  styleUrl: './reqres.component.css'
})
export class ReqresComponent {
[x: string]: any;
  reqresService = inject(ReqresService);
  localReqRes$!: Observable<IReqRes>;

  ngOnInit(): void {
    this.localReqRes$ = this.reqresService.getDataReqresByGet();
  }
}
