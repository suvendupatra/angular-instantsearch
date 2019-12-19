import {
  Component,
  Input,
  Inject,
  forwardRef,
  Optional,
  SkipSelf,
} from '@angular/core';
import { Widget, BaseWidget } from '../base-widget';
import {
  InstantSearchInstance,
  NgAisInstantSearch,
} from '../instantsearch/instantsearch';
import indexWidget from 'instantsearch.js/es/widgets/index/index';

const connectIndex = () => indexWidget;

@Component({
  selector: 'ais-index',
  template: `<ng-content></ng-content>`,
})
export class NgAisIndex extends BaseWidget {
  @Input() public indexName: string;
  @Input() public indexId?: string;

  public widget?: Widget &
    Pick<InstantSearchInstance, 'addWidgets' | 'removeWidgets'>;

  constructor(
    @SkipSelf()
    @Inject(forwardRef(() => NgAisIndex))
    @Optional()
    public indexParent: NgAisIndex,
    @Inject(forwardRef(() => NgAisInstantSearch))
    public instantSearchParent: NgAisInstantSearch
  ) {
    super('Index');
  }

  public addWidgets(widgets: Widget[]) {
    this.widget.addWidgets(widgets);
  }

  public removeWidgets(widgets: Widget[]) {
    this.widget.removeWidgets(widgets);
  }

  ngOnInit() {
    this.createWidget(connectIndex, {
      indexName: this.indexName,
      indexId: this.indexId,
    });
    super.ngOnInit();
  }
}
