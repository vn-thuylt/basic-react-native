/**
 * Component that wraps platform ScrollView while providing integration with touch locking "responder" system.
 *
 * Keep in mind that ScrollViews must have a bounded height in order to work, since they contain unbounded-height
 * children into a bounded container (via a scroll interaction). In order to bound the height of a ScrollView,
 * either set the height of the view directly (discouraged) or make sure all parent views have bounded height.
 * Forgetting to transfer {flex: 1} down the view stack can lead to errors here, which the element inspector
 * makes easy to debug.
 *
 * Doesn't yet support other contained responders from blocking this scroll view from becoming the responder.
 *
 * <ScrollView> vs <FlatList> - which one to use?
 *
 * ScrollView simply renders all its react child components at once. That makes it very easy to understand and use.
 *
 * On the other hand, this has a performance downside. Imagine you have a very long list of items you want to display,
 * maybe several screens worth of content. Creating JS components and native views for everything all at once,
 * much of which may not even be shown, will contribute to slow rendering and increased memory usage.
 *
 * This is where FlatList comes into play. FlatList renders items lazily, just when they are about to appear, and
 * removes items that scroll way off screen to save memory and processing time.
 *
 * FlatList is also handy if you want to render separators between your items, multiple columns, infinite scroll
 * loading, or any number of other features it supports out of the box.
 */