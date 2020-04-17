function appendAppScripts(finalCallback) {    
    let scriptUrls = [ 
        //           application 
        { src:'app/tableContext.js', id:'tableContext_js' },
        { src:'app/contact.js', id:'contact_js' },
        { src:'app/data.js', id:'data_js' },
        { src:'doc/booklet.js', id:'booklet_js' },  // row location matters 
        { src:'app/dropdown_filter.js', id:'dropdownfilter_js' },
        { src:'elements/dropdownContainer.js', id:'dropdownContainer_js' },
        { src:'elements/icon.js', id:'icon_js' },
        { src:'elements/iconContainer.js', id:'iconContainer_js' },
        { src:'elements/input.js', id:'input_js' },
        { src:'elements/inputContainer.js', id:'inputContainer_js' },
        { src:'elements/item_IconText.js', id:'item_IconText_js' }, 
        { src:'elements/item.js', id:'item_js' },
        { src:'elements/td.js', id:'td_js' },
        { src:'elements/th.js', id:'th_js' },
        { src:'app/icon_filter.js', id:'icon_filter_js' },   
        { src:'app/form_addContact.js', id:'formAddContact_js' },
        { src:'app/parser.js', id:'parser_js' },
        { src:'app/table.js', id:'table_js' }, 
        
        //            documentation
        // overview  get_Fonts
        { src:'doc/get_fonts.js', id:'fonts_js' },
        { src:'doc/get_overview.js', id:'overview_js' },
        { src:'doc/get_template.js', id:'template_js' },
        { src:'doc/get_userInterface.js', id:'userInterface_js' },
        { src:'doc/get_docUserInterface.js', id:'docUserInterface_js' },
        // table issues 
        { src:'doc/get_activateIcon.js', id:'activateIcon_js' }, 
        { src:'doc/get_addContactForm.js', id:'addContactForm_js' },
        { src:'doc/get_addGoogleMaps.js', id:'addGoogleMaps_js' },  
        { src:'doc/get_addLeafletMap.js', id:'addLeafletMaps_js' },  
        { src:'doc/get_addPortraitPhoto.js', id:'addPortraitPhoto_js' },
        { src:'doc/get_addSkype.js', id:'get_addSkype_js' }, 
        { src:'doc/get_columnFilter.js', id:'columnFilter_js' },
        { src:'doc/get_customizeScrollbar.js', id:'customizeScrollbar_js' },
        { src:'doc/get_highlightMouseRow.js', id:'highlightMouseRow_js' },       
        { src:'doc/get_highlightMouseRow.js', id:'highlightMouseRow_js' }, 
        { src:'doc/get_highlightResult.js', id:'highlightResult_js' },
        { src:'doc/get_highlightRow.js', id:'highlightRow_js' },   
        { src:'doc/get_localStorage.js', id:'localStorage_js' },
        { src:'doc/get_modalDraggable.js', id:'modalDraggable_js' },
        { src:'doc/get_responsiveTable.js', id:'responsiveTable_js' },
        { src:'doc/get_reusableElements.js', id:'reusableElements_js' },                
        { src:'doc/get_supplementalRow.js', id:'supplementalRow_js' }, 
        { src:'doc/get_tableContainer.js', id:'tableContainer_js' }, 
        { src:'doc/get_tableContainerHeader.js', id:'tableContainerHeader_js' }, 
        { src:'doc/get_tableContext.js', id:'tableContext_js' },
        { src:'doc/get_tableHeader1stRow.js', id:'tableHeader1stRow_js' },
        { src:'doc/get_tableHeader2ndRow.js', id:'tableHeader2ndRow_js' },
        { src:'doc/get_tableOverview.js', id:'tableOverview_js' }, 
        { src:'doc/get_tableSearch.js', id:'tableSearch_js' },
        { src:'doc/get_tableSort.js', id:'tableSort_js' },
        { src:'doc/get_zebraTable.js', id:'zebraTable_js' }, 
        // documentation issues         
        { src:'doc/get_bookletClass.js', id:'bookletClass_js' }, 
        { src:'doc/get_docFrontPageClosed.js', id:'docFrontPageClosed_js' },
        { src:'doc/get_docFrontPageOpened.js', id:'docFrontPageOpened_js' },
        { src:'doc/get_docHtml.js', id:'docHtml_js' },
        { src:'doc/get_docAddOpenIcon.js', id:'docAddOpenIcon_js' },  
        { src:'doc/get_docOverview.js', id:'docOverview_js' },  
        { src:'doc/get_docRegularPage.js', id:'docRegularPage_js' },
        { src:'doc/get_displaySnippets.js', id:'displaySnippets_js' },
        { src:'doc/get_verticalSeparator.js', id:'get_verticalSeparator_js' }, 
        // javascript        
        { src:'doc/get_anchorTag.js', id:'anchorTag_js' },
        { src:'doc/get_arrowFunction.js', id:'arrowFunction_js' },
        { src:'doc/get_class.js', id:'class_js' }, 
        { src:'doc/get_insertBefore.js', id:'insertBefore_js' }, 
        { src:'doc/get_json.js', id:'json_js' },
        { src:'doc/get_proxy.js', id:'proxy_js' }, 
        { src:'doc/get_querySelector.js', id:'querySelector_js' },
        { src:'doc/get_sort.js', id:'sort_js' },
         // css
        { src:'doc/get_before.js', id:'before_js' },        
        { src:'doc/get_fieldset.js', id:'fieldset_js' },  
        { src:'doc/get_flex.js', id:'flex_js' },
        { src:'doc/get_hover.js', id:'hover_js' },
        { src:'doc/get_gettingStarting.js', id:'gettingStarting_js' }, 
        { src:'doc/get_linearGradient.js', id:'linearGradient_js' }, 
        { src:'doc/get_media.js', id:'media_js' },       
        { src:'doc/get_nthChild.js', id:'nthChild_js' },        
        { src:'doc/get_position.js', id:'position_js' },
        { src:'doc/get_scrollbar.js', id:'scrollbar_js' },     
        { src:'doc/get_textShadow.js', id:'textShadow_js' },    
        { src:'doc/get_transform.js', id:'transform_js' },  
        { src:'doc/get_transition.js', id:'transition_js' },  
        { src:'doc/get_zIndex.js', id:'zIndex_js' },
        // html
        { src:'doc/get_caption.js', id:'caption_js' }, 
        { src:'doc/get_dataAttribute.js', id:'dataAttribute_js' },     
        { src:'doc/get_innerHTML.js', id:'innerHTML_js' }   
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
