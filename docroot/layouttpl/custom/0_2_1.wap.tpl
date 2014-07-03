<style>
.sub_pic {
display: none;
}
.aui .sub_pic {
display: none;
}
</style>
<div class="columns-0-2-1" id="main-content" role="main">
    <div class="container-fluid">
	<div class="portlet-layout row">
		<div class="portlet-column portlet-column-only" id="column-1">
			$processor.processColumn("column-1", "portlet-column-content portlet-column-content-only")
		</div>
	</div>
	</div>
  <div class="container">
	<div class="portlet-layout row">
		<div class="portlet-column portlet-column-first col-md-6" id="column-2">
			$processor.processColumn("column-2", "portlet-column-content portlet-column-content-first")
		</div>

		<div class="portlet-column portlet-column-last col-md-6" id="column-3">
			$processor.processColumn("column-3", "portlet-column-content portlet-column-content-last")
		</div>
	</div>

	<div class="portlet-layout row">
		<div class="portlet-column portlet-column-only" id="column-4">
			$processor.processColumn("column-4", "portlet-column-content portlet-column-content-only")
		</div>
	</div>
</div>
</div>