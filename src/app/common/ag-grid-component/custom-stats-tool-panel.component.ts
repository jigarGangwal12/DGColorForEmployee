import {Component, ViewChild, ViewContainerRef} from "@angular/core";

import {IToolPanel, IToolPanelParams} from "ag-grid-community";

@Component({
    selector: 'custom-stats',
    template: `        
        <div style="text-align: center">
        <span>
            <h2><i class="fa fa-calendar"></i> Custom Tool Panel Component</h2>
            <dl style="font-size: large; padding: 30px 40px 10px 30px">
                <dt class="totalStyle"><button>Export</button></dt>
            </dl>
        </span>
        </div>`, styles: [`
            .totalStyle {
                padding-bottom: 15px
            }
        `
    ]
})
export class CustomStatsToolPanel implements IToolPanel{
    refresh(): void {
        throw new Error("Method not implemented.");
    }
    private params!: IToolPanelParams ;

    agInit(params: IToolPanelParams): void {
        this.params = params;
    }
    export(){
      this.params.api.exportDataAsCsv()
    }
}
