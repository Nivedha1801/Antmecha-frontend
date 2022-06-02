import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isCollapsed: boolean = false;
  ticketChart: any;
  chartVisible: boolean = true;
  t_chartVisible: boolean = true;
  taskChart: any;
  projectCard: any;
  contentDerived: boolean = false;
  overDueCard: any;
  statusCard: any;
  upcomingCard: any;
  u_chartVisible: boolean = true;
  upcomingChart: any;
  priorityCard: any;
  workloadChart: any;
  workloadCard: any;
  assignee: any = [];
  percent: any = [];
  oleChart: any = [];
  oleData: any;
  dept: any = [];
  percentage: any = [];
  constructor(private dt_service: DataService) {}

  async ngOnInit() {
    this.projectCard = await this.dt_service.getProjectDetails();
    console.log(this.projectCard);
    this.overDueCard = await this.dt_service.getOverDueTasks();
    console.log(this.overDueCard);
    this.statusCard = await this.dt_service.getTaskStatus();
    console.log(this.statusCard);
    this.upcomingCard = await this.dt_service.getDealines();
    console.log(this.upcomingCard);
    this.priorityCard = await this.dt_service.getPriority();
    this.workloadCard = await this.dt_service.getWorkload();
    console.log(this.workloadCard);
    this.oleData = await this.dt_service.getOLE();
    console.log(this.oleData);
    this.oleData.map((dt: any) => {
      this.dept.push(dt.department);
      this.percentage.push(dt.percentage);
    });
    this.workloadCard.map((dt: { assignee: ''; percentage: '' }) => {
      this.assignee.push(dt.assignee);
      this.percent.push(dt.percentage);
    });
    this.ticketChart = {
      color: ['#264653', '#2a9d8f'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
        },
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
      },
      yAxis: {
        type: 'category',
        data: [
          'Jan 2022',
          'Feb 2022',
          'Mar 2022',
          'Apr 2022',
          'May 2022',
          'Jun 2022',
          'Jul 2022',
          'Aug 2022',
          'Sept 2022',
          'Oct 2022',
          'Nov 2022',
          'Dec 2022',
        ],
      },
      series: [
        {
          name: 'Resolved Tickets',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: [10, 30, 24, 4, 13, 18, 22, 23, 31, 15, 17, 19],
        },
        {
          name: 'Reopened',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: [11, 34, 23, 10, 15, 6, 24, 5, 19, 24, 20, 17],
        },
      ],
    };
    this.taskChart = {
      tooltip: {
        trigger: 'item',
      },
      color: ['#ff006e', '#3a86ff', '#8338ec', '#ffbe0b'],
      legend: {
        orient: 'horizontal',
        bottom: 'bottom',
        itemHeight: 20,
        itemWidth: 12,
        textStyle: {
          fontSize: 12,
        },
        padding: 10,
        itemGap: 16,
        width: '70%',
        icon: 'circle',
      },
      series: [
        {
          emphasis: {
            label: {
              show: true,
              fontSize: '14',
              fontWeight: 'bold',
            },
          },
          type: 'pie',
          radius: ['32%', '50%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 2,
            borderColor: '#fff',
            borderWidth: 0,
          },
          label: {
            show: false,
            position: 'center',
            fontSize: 20,
          },
          labelLine: {
            show: false,
          },

          data: this.statusCard,
        },
      ],
    };
    this.upcomingChart = {
      tooltip: {
        trigger: 'item',
      },
      color: ['#ffbe0b', '#0081a7', '#ef233c', '#8d99ae'],
      legend: {
        orient: 'horizontal',
        bottom: 'bottom',
        itemHeight: 20,
        itemWidth: 12,
        textStyle: {
          fontSize: 12,
        },
        padding: 10,
        itemGap: 16,
        width: '70%',
        icon: 'circle',
      },
      series: [
        {
          emphasis: {
            label: {
              show: true,
              fontSize: '14',
              fontWeight: 'bold',
            },
          },
          type: 'pie',
          radius: ['32%', '50%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 2,
            borderColor: '#fff',
            borderWidth: 0,
          },
          label: {
            show: false,
            position: 'center',
            fontSize: 20,
          },
          labelLine: {
            show: false,
          },

          data: this.priorityCard,
        },
      ],
    };
    this.workloadChart = {
      color: ['#bc4749'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: this.assignee,
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: 'Direct',
          type: 'bar',
          barWidth: '60%',
          data: this.percent,
        },
      ],
    };

    this.oleChart = {
      color: ['#00afb9', '#fed9b7', '#bc4749'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: this.dept,
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: 'Direct',
          type: 'bar',
          barWidth: '60%',
          data: this.percentage,
        },
      ],
    };

    this.contentDerived = true;
  }
}
