import { CSSProperties } from "react";
const base = "mm_tab_item" 
, stated = `${base} _`

export default function TabBar() {
  return <article>
    <section>
      <h3 className="mdc-typography--subtitle1">
        Tabs with icons next to labels
      </h3>
      <div className="mdc-tab-bar" role="tablist">
        <div className="mdc-tab-scroller">
          <div
            className="mdc-tab-scroller__scroll-area mdc-tab-scroller__scroll-area--scroll"
            style={{"margin-bottom": " 0px"} as CSSProperties}
          >
            <div className="mdc-tab-scroller__scroll-content">
              <button
                className="mdc-tab"
                role="tab"
                aria-selected="false"
                tabIndex={-1}
                id="mdc-tab-4"
              >
                <span className="mdc-tab__content">
                  <span
                    className="mdc-tab__icon material-icons"
                    aria-hidden="true"
                  >
                    access_time
                  </span>
                  <span className="mdc-tab__text-label">Recents</span>
                </span>
                <span className="mdc-tab-indicator">
                  <span
                    className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"                    ></span>
                </span>
                <span
                  className="mdc-tab__ripple mdc-ripple-upgraded"
                  style={{"--mdc-ripple-fg-size": "189px", "--mdc-ripple-fg-scale": "1.74454", "--mdc-ripple-fg-translate-start": "103.5px, -69.2813px", "--mdc-ripple-fg-translate-end": "63.5469px, -70.5px"} as CSSProperties}
                ></span>
              </button>
              <button
                className="mdc-tab"
                role="tab"
                aria-selected="false"
                tabIndex={-1}
                id="mdc-tab-5"
              >
                <span className="mdc-tab__content">
                  <span
                    className="mdc-tab__icon material-icons"
                    aria-hidden="true"
                  >
                    near_me
                  </span>
                  <span className="mdc-tab__text-label">Nearby</span>
                </span>
                <span className="mdc-tab-indicator">
                  <span
                    className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"                    ></span>
                </span>
                <span
                  className="mdc-tab__ripple mdc-ripple-upgraded"
                  style={{"--mdc-ripple-fg-size": "184px", "--mdc-ripple-fg-scale": "1.74553", "--mdc-ripple-fg-translate-start": "82.9063px, -79.7813px", "--mdc-ripple-fg-translate-end": "61.7266px, -68px"} as CSSProperties}
                ></span>
              </button>
              <button
                className="mdc-tab mdc-tab--active"
                role="tab"
                aria-selected="true"
                tabIndex={0}
                id="mdc-tab-6"
              >
                <span className="mdc-tab__content">
                  <span
                    className="mdc-tab__icon material-icons"
                    aria-hidden="true"
                  >
                    favorite
                  </span>
                  <span className="mdc-tab__text-label">Favorites</span>
                </span>
                <span className="mdc-tab-indicator mdc-tab-indicator--active">
                  <span
                    className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"                    ></span>
                </span>
                <span
                  className="mdc-tab__ripple mdc-ripple-upgraded"
                  style={{"--mdc-ripple-fg-size": "197px", "--mdc-ripple-fg-scale": "1.74077", "--mdc-ripple-fg-translate-start": "51.9531px, -69.2813px", "--mdc-ripple-fg-translate-end": "66.2266px, -74.5px"} as CSSProperties}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <h3 className="mdc-typography--subtitle1">
        Tabs with icons above labels and indicators restricted to content
      </h3>
      <div className="mdc-tab-bar" role="tablist">
        <div className="mdc-tab-scroller">
          <div
            className="mdc-tab-scroller__scroll-area mdc-tab-scroller__scroll-area--scroll"
            style={{"margin-bottom": " 0px"} as CSSProperties}
          >
            <div className="mdc-tab-scroller__scroll-content">
              <button
                className="mdc-tab mdc-tab--stacked mdc-tab--active"
                role="tab"
                aria-selected="true"
                tabIndex={0}
                id="mdc-tab-7"
              >
                <span className="mdc-tab__content">
                  <span
                    className="mdc-tab__icon material-icons"
                    aria-hidden="true"
                  >
                    access_time
                  </span>
                  <span className="mdc-tab__text-label">Recents</span>
                  <span className="mdc-tab-indicator mdc-tab-indicator--active">
                    <span
                      className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"                      ></span>
                  </span>
                </span>
                <span
                  className="mdc-tab__ripple mdc-ripple-upgraded"
                  style={{"--mdc-ripple-fg-size": "189px", "--mdc-ripple-fg-scale": "1.7682", "--mdc-ripple-fg-translate-start": "88.5px, -82.2813px", "--mdc-ripple-fg-translate-end": "63.5469px, -58.5px"} as CSSProperties}
                ></span>
              </button>
              <button
                className="mdc-tab mdc-tab--stacked"
                role="tab"
                aria-selected="false"
                tabIndex={-1}
                id="mdc-tab-8"
              >
                <span className="mdc-tab__content">
                  <span
                    className="mdc-tab__icon material-icons"
                    aria-hidden="true"
                  >
                    near_me
                  </span>
                  <span className="mdc-tab__text-label">Nearby</span>
                  <span className="mdc-tab-indicator">
                    <span
                      className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"                      ></span>
                  </span>
                </span>
                <span
                  className="mdc-tab__ripple mdc-ripple-upgraded"
                  style={{"--mdc-ripple-fg-size": "184px", "--mdc-ripple-fg-scale": "1.7705", "--mdc-ripple-fg-translate-start": "25.9063px, -82.7813px", "--mdc-ripple-fg-translate-end": "61.7266px, -56px"} as CSSProperties}
                ></span>
              </button>
              <button
                className="mdc-tab mdc-tab--stacked"
                role="tab"
                aria-selected="false"
                tabIndex={-1}
                id="mdc-tab-9"
              >
                <span className="mdc-tab__content">
                  <span
                    className="mdc-tab__icon material-icons"
                    aria-hidden="true"
                  >
                    favorite
                  </span>
                  <span className="mdc-tab__text-label">Favorites</span>
                  <span className="mdc-tab-indicator">
                    <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                  </span>
                </span>
                <span className="mdc-tab__ripple mdc-ripple-upgraded"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <h3 className="mdc-typography--subtitle1">Scrolling tabs</h3>
      <div className="mdc-tab-bar" role="tablist">
        <div className="mdc-tab-scroller">
          <div
            className="mdc-tab-scroller__scroll-area mdc-tab-scroller__scroll-area--scroll"
            style={{"margin-bottom": " 0px"} as CSSProperties}
          >
            <div
              className="mdc-tab-scroller__scroll-content"
              style={{"transform": " none"} as CSSProperties}
            >
              <button
                className="mdc-tab"
                role="tab"
                aria-selected="false"
                tabIndex={-1}
                id="mdc-tab-10"
              >
                <span className="mdc-tab__content">
                  <span className="mdc-tab__text-label">Tab One</span>
                </span>
                <span className="mdc-tab-indicator">
                  <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span className="mdc-tab__ripple mdc-ripple-upgraded"></span>
              </button>
              <button
                className="mdc-tab"
                role="tab"
                aria-selected="false"
                tabIndex={-1}
                id="mdc-tab-11"
              >
                <span className="mdc-tab__content">
                  <span className="mdc-tab__text-label">Tab Two</span>
                </span>
                <span className="mdc-tab-indicator">
                  <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span className="mdc-tab__ripple mdc-ripple-upgraded"></span>
              </button>
              <button
                className="mdc-tab"
                role="tab"
                aria-selected="false"
                tabIndex={-1}
                id="mdc-tab-12"
              >
                <span className="mdc-tab__content">
                  <span className="mdc-tab__text-label">Tab Three</span>
                </span>
                <span className="mdc-tab-indicator">
                  <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span className="mdc-tab__ripple mdc-ripple-upgraded"></span>
              </button>
              <button
                className="mdc-tab"
                role="tab"
                aria-selected="false"
                tabIndex={-1}
                id="mdc-tab-13"
              >
                <span className="mdc-tab__content">
                  <span className="mdc-tab__text-label">Tab Four</span>
                </span>
                <span className="mdc-tab-indicator">
                  <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span className="mdc-tab__ripple mdc-ripple-upgraded"></span>
              </button>
              <button
                className="mdc-tab"
                role="tab"
                aria-selected="false"
                tabIndex={-1}
                id="mdc-tab-14"
              >
                <span className="mdc-tab__content">
                  <span className="mdc-tab__text-label">Tab Five</span>
                </span>
                <span className="mdc-tab-indicator">
                  <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span className="mdc-tab__ripple mdc-ripple-upgraded"></span>
              </button>
              <button
                className="mdc-tab"
                role="tab"
                aria-selected="false"
                tabIndex={-1}
                id="mdc-tab-15"
              >
                <span className="mdc-tab__content">
                  <span className="mdc-tab__text-label">Tab Six</span>
                </span>
                <span className="mdc-tab-indicator">
                  <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span className="mdc-tab__ripple mdc-ripple-upgraded"></span>
              </button>
              <button
                className="mdc-tab"
                role="tab"
                aria-selected="false"
                tabIndex={-1}
                id="mdc-tab-16"
              >
                <span className="mdc-tab__content">
                  <span className="mdc-tab__text-label">Tab Seven</span>
                </span>
                <span className="mdc-tab-indicator">
                  <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span className="mdc-tab__ripple mdc-ripple-upgraded"></span>
              </button>
              <button
                className="mdc-tab mdc-tab--active"
                role="tab"
                aria-selected="true"
                tabIndex={0}
                id="mdc-tab-17"
              >
                <span className="mdc-tab__content">
                  <span className="mdc-tab__text-label">Tab Eight</span>
                </span>
                <span className="mdc-tab-indicator mdc-tab-indicator--active">
                  <span
                    className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"                    ></span>
                </span>
                <span
                  className="mdc-tab__ripple mdc-ripple-upgraded"
                  style={{"--mdc-ripple-fg-size": "76px", "--mdc-ripple-fg-scale": "1.93301", "--mdc-ripple-fg-translate-start": "14.4063px, 0.21875px", "--mdc-ripple-fg-translate-end": "26.1094px, -14px"} as CSSProperties}
                ></span>
              </button>
              <button
                className="mdc-tab"
                role="tab"
                aria-selected="false"
                tabIndex={-1}
                id="mdc-tab-18"
              >
                <span className="mdc-tab__content">
                  <span className="mdc-tab__text-label">Tab Nine</span>
                </span>
                <span className="mdc-tab-indicator">
                  <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span className="mdc-tab__ripple mdc-ripple-upgraded"></span>
              </button>
              <button
                className="mdc-tab"
                role="tab"
                aria-selected="false"
                tabIndex={-1}
                id="mdc-tab-19"
              >
                <span className="mdc-tab__content">
                  <span className="mdc-tab__text-label">Tab Ten</span>
                </span>
                <span className="mdc-tab-indicator">
                  <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span className="mdc-tab__ripple mdc-ripple-upgraded"></span>
              </button>
              <button
                className="mdc-tab"
                role="tab"
                aria-selected="false"
                tabIndex={-1}
                id="mdc-tab-20"
              >
                <span className="mdc-tab__content">
                  <span className="mdc-tab__text-label">Tab Eleven</span>
                </span>
                <span className="mdc-tab-indicator">
                  <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span className="mdc-tab__ripple mdc-ripple-upgraded"></span>
              </button>
              <button
                className="mdc-tab"
                role="tab"
                aria-selected="false"
                tabIndex={-1}
                id="mdc-tab-21"
              >
                <span className="mdc-tab__content">
                  <span className="mdc-tab__text-label">Tab Twelve</span>
                </span>
                <span className="mdc-tab-indicator">
                  <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span className="mdc-tab__ripple mdc-ripple-upgraded"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div>
        <div>
          <div tabIndex={-1} className={`${base} content_recents`}></div>
          <div tabIndex={-1} className={`${base} _hover content_nearby`}></div>
          <div tabIndex={-1} className={`${base} _active _bordered content_favorites`}></div>
          <div tabIndex={-1} className={`${base} _active content_favorites`}></div>
        </div>
      </div>
      <div>
        <div>
          <div tabIndex={-1} className={`${base}_small content_recents`}></div>
          <div tabIndex={-1} className={`${base}_small _hover content_nearby`}></div>
          <div tabIndex={-1} className={`${base}_small _active _bordered content_favorites`}></div>
          <div tabIndex={-1} className={`${base}_small _active content_favorites`}></div>
        </div>
      </div>
      <div>
        <div>
          <div tabIndex={-1} className={`${base} _active content_tab_One`}></div>
          <div tabIndex={-1} className={`${base} _focus content_tab_Two`}></div>
          <div tabIndex={-1} className={`${base} content_tab_Three`}></div>
          <div tabIndex={-1} className={`${base} content_tab_Four`}></div>
          <div tabIndex={-1} className={`${base} content_tab_Five`}></div>
          <div tabIndex={-1} className={`${base} content_tab_Six`}></div>
          <div tabIndex={-1} className={`${base} content_tab_Seven`}></div>
          <div tabIndex={-1} className={`${base} _active _bordered content_tab_Eight`}></div>
          <div tabIndex={-1} className={`${base} content_tab_Nine`}></div>
          <div tabIndex={-1} className={`${base} content_tab_Ten`}></div>
          <div tabIndex={-1} className={`${base} content_tab_Eleven`}></div>
          <div tabIndex={-1} className={`${base} content_tab_Twelve`}></div>
        </div>
      </div>
    </section>
  </article>
}
