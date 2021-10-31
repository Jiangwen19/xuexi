import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PostmanService } from 'src/app/common/services/postman.service';
import { Breadcrumbs, IBreadcrumb } from 'src/app/common/utility/breadcrumbs';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  public breadcrumbs: Array<IBreadcrumb>;

  public showActionBtn: boolean;

  public showControlBtn: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private postmanService: PostmanService) {
    this.postmanService.loadMain$.emit(true);
    this.breadcrumbs = [];
  }

  ngOnInit() {
    const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

    //subscribe to the NavigationEnd event
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {

      //set breadcrumbs
      let root: ActivatedRoute = this.activatedRoute.root;
      let breadcrumb: IBreadcrumb[] = this.getBreadcrumbs(root);

      //remove duplicate element by label
      breadcrumb = breadcrumb.reduce((x, y) => x.findIndex(e => e.label == y.label) < 0 ? [...x, y] : x, []);
      let breadcrumbLast = breadcrumb[breadcrumb.length - 1];


      if (breadcrumbLast) {
        let hasLast = Breadcrumbs.hasbreadcrumb(breadcrumbLast)

        if ((hasLast === -1) && (breadcrumbLast.url !== '/main/index')) {
          Breadcrumbs.BREADCRUMBS.push(breadcrumbLast)
        } else {
          Breadcrumbs.BREADCRUMBS = Breadcrumbs.BREADCRUMBS.slice(0, hasLast + 1)
        }
        // if (breadcrumbLast.url === '/main/index') {
        //   Breadcrumbs.BREADCRUMBS = [];
        // }

        this.breadcrumbs = Breadcrumbs.BREADCRUMBS;
        // console.log('%c breadcrumb list ：', 'background: #222; color: white');

      }

    });


  }
  private getBreadcrumbs(route: ActivatedRoute, url: string = "", breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

    //get the child routes
    let children: ActivatedRoute[] = route.children;
    // console.log(children)

    //return if there are no more children
    if (children.length === 0) {
      return breadcrumbs;
    }

    //iterate over each children
    for (let child of children) {
      //verify primary route
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }

      //verify the custom data property "breadcrumb" is specified on the route
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      //get the route's URL segment
      let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");

      //append route URL to URL
      url += `/${routeURL}`;

      /*console.log('%c url：', 'background: #222; color: red');
      console.log(url);*/

      //add breadcrumb
      let breadcrumb: IBreadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url: '/main' + url
      };
      /*console.log('%c single breadcrumb：', 'background: #222; color: red');
      console.log(breadcrumb);*/

      breadcrumbs.push(breadcrumb);

      //recursive
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }

    //we should never get here, but just in case
    return breadcrumbs;
  }

}
