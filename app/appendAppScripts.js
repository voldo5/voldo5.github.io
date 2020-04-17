function appendAppScripts(finalCallback) {    
    let scriptUrls = [ 
        //           application 
        { src:'app/tableContext.min.js', id:'tableContext_js' },
        { src:'app/contact.min.js', id:'contact_js' },
        { src:'app/data.min.js', id:'data_js' },
        { src:'doc/booklet.min.js', id:'booklet_js' },  // row location matters 
        { src:'app/dropdown_filter.min.js', id:'dropdownfilter_js' },
        { src:'elements/dropdownContainer.min.js', id:'dropdownContainer_js' },
        { src:'elements/icon.min.js', id:'icon_js' },
        { src:'elements/iconContainer.min.js', id:'iconContainer_js' },
        { src:'elements/input.min.js', id:'input_js' },
        { src:'elements/inputContainer.min.js', id:'inputContainer_js' },
        { src:'elements/item_IconText.min.js', id:'item_IconText_js' }, 
        { src:'elements/item.min.js', id:'item_js' },
        { src:'elements/td.min.js', id:'td_js' },
        { src:'elements/th.min.js', id:'th_js' },
        { src:'app/icon_filter.min.js', id:'icon_filter_js' },   
        { src:'app/form_addContact.min.js', id:'formAddContact_js' },
        { src:'app/parser.min.js', id:'parser_js' },
        { src:'app/table.min.js', id:'table_js' }, 
        
        //            documentation
        // overview  get_Fonts
        { src:'doc/get_fonts.min.js', id:'fonts_js' },
        { src:'doc/get_overview.min.js', id:'overview_js' },
        { src:'doc/get_template.min.js', id:'template_js' },
        { src:'doc/get_userInterface.min.js', id:'userInterface_js' },
        { src:'doc/get_docUserInterface.min.js', id:'docUserInterface_js' },
        // table issues 
        { src:'doc/get_activateIcon.min.js', id:'activateIcon_js' }, 
        { src:'doc/get_addContactForm.min.js', id:'addContactForm_js' },
        { src:'doc/get_addGoogleMaps.min.js', id:'addGoogleMaps_js' },  
        { src:'doc/get_addLeafletMap.min.js', id:'addLeafletMaps_js' },  
        { src:'doc/get_addPortraitPhoto.min.js', id:'addPortraitPhoto_js' },
        { src:'doc/get_addSkype.min.js', id:'get_addSkype_js' }, 
        { src:'doc/get_columnFilter.min.js', id:'columnFilter_js' },
        { src:'doc/get_customizeScrollbar.min.js', id:'customizeScrollbar_js' },
        { src:'doc/get_highlightMouseRow.min.js', id:'highlightMouseRow_js' },       
        { src:'doc/get_highlightMouseRow.min.js', id:'highlightMouseRow_js' }, 
        { src:'doc/get_highlightResult.min.js', id:'highlightResult_js' },
        { src:'doc/get_highlightRow.min.js', id:'highlightRow_js' },   
        { src:'doc/get_localStorage.min.js', id:'localStorage_js' },
        { src:'doc/get_modalDraggable.min.js', id:'modalDraggable_js' },
        { src:'doc/get_responsiveTable.min.js', id:'responsiveTable_js' },
        { src:'doc/get_reusableElements.min.js', id:'reusableElements_js' },                
        { src:'doc/get_supplementalRow.min.js', id:'supplementalRow_js' }, 
        { src:'doc/get_tableContainer.min.js', id:'tableContainer_js' }, 
        { src:'doc/get_tableContainerHeader.min.js', id:'tableContainerHeader_js' }, 
        { src:'doc/get_tableContext.min.js', id:'tableContext_js' },
        { src:'doc/get_tableHeader1stRow.min.js', id:'tableHeader1stRow_js' },
        { src:'doc/get_tableHeader2ndRow.min.js', id:'tableHeader2ndRow_js' },
        { src:'doc/get_tableOverview.min.js', id:'tableOverview_js' }, 
        { src:'doc/get_tableSearch.min.js', id:'tableSearch_js' },
        { src:'doc/get_tableSort.min.js', id:'tableSort_js' },
        { src:'doc/get_zebraTable.min.js', id:'zebraTable_js' }, 
        // documentation issues         
        { src:'doc/get_bookletClass.min.js', id:'bookletClass_js' }, 
        { src:'doc/get_docFrontPageClosed.min.js', id:'docFrontPageClosed_js' },
        { src:'doc/get_docFrontPageOpened.min.js', id:'docFrontPageOpened_js' },
        { src:'doc/get_docHtml.min.js', id:'docHtml_js' },
        { src:'doc/get_docAddOpenIcon.min.js', id:'docAddOpenIcon_js' },  
        { src:'doc/get_docOverview.min.js', id:'docOverview_js' },  
        { src:'doc/get_docRegularPage.min.js', id:'docRegularPage_js' },
        { src:'doc/get_displaySnippets.min.js', id:'displaySnippets_js' },
        { src:'doc/get_verticalSeparator.min.js', id:'get_verticalSeparator_js' }, 
        // javascript        
        { src:'doc/get_anchorTag.min.js', id:'anchorTag_js' },
        { src:'doc/get_arrowFunction.min.js', id:'arrowFunction_js' },
        { src:'doc/get_class.min.js', id:'class_js' }, 
        { src:'doc/get_insertBefore.min.js', id:'insertBefore_js' }, 
        { src:'doc/get_json.min.js', id:'json_js' },
        { src:'doc/get_proxy.min.js', id:'proxy_js' }, 
        { src:'doc/get_querySelector.min.js', id:'querySelector_js' },
        { src:'doc/get_sort.min.js', id:'sort_js' },
         // css
        { src:'doc/get_before.min.js', id:'before_js' },        
        { src:'doc/get_fieldset.min.js', id:'fieldset_js' },  
        { src:'doc/get_flex.min.js', id:'flex_js' },
        { src:'doc/get_hover.min.js', id:'hover_js' },
        { src:'doc/get_gettingStarting.min.js', id:'gettingStarting_js' }, 
        { src:'doc/get_linearGradient.min.js', id:'linearGradient_js' }, 
        { src:'doc/get_media.min.js', id:'media_js' },       
        { src:'doc/get_nthChild.min.js', id:'nthChild_js' },        
        { src:'doc/get_position.min.js', id:'position_js' },
        { src:'doc/get_scrollbar.min.js', id:'scrollbar_js' },     
        { src:'doc/get_textShadow.min.js', id:'textShadow_js' },    
        { src:'doc/get_transform.min.js', id:'transform_js' },  
        { src:'doc/get_transition.min.js', id:'transition_js' },  
        { src:'doc/get_zIndex.min.js', id:'zIndex_js' },
        // html
        { src:'doc/get_caption.min.js', id:'caption_js' }, 
        { src:'doc/get_dataAttribute.min.js', id:'dataAttribute_js' },     
        { src:'doc/get_innerHTML.min.js', id:'innerHTML_js' }   
    ];

    loadScripts(scriptUrls, finalCallback);   
}

// RECURSIVE LOAD SCRIPTS
function loadScripts( urls, final_callback, index=0 ){
    if( typeof urls[index+1] === "undefined" )
    {
        loadScript( urls[index], final_callback );
    }
    else
    {
        loadScript( urls[index], function() {
            loadScripts( urls, final_callback, index+1 );
        } );
    }
}

// LOAD SCRIPT
function loadScript( url, callback ){
    var script = document.createElement( "script" );
    script.type = "text/javascript";
    if(script.readyState) // IE
    {
        script.onreadystatechange = function()
        {
            if ( script.readyState === "loaded" || script.readyState === "complete" )
            {
                script.onreadystatechange = null;
                callback();
            }
        };
    }
    else // Others
    {  
        script.onload = function() { callback(); };
    }

    script.id = url.id; 
    script.src = url.src;  
    document.head.appendChild(script); 
}
