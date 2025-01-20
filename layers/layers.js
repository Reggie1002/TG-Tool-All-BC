var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Rangepastures_1 = new ol.format.GeoJSON();
var features_Rangepastures_1 = format_Rangepastures_1.readFeatures(json_Rangepastures_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rangepastures_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rangepastures_1.addFeatures(features_Rangepastures_1);
var lyr_Rangepastures_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rangepastures_1, 
                style: style_Rangepastures_1,
                popuplayertitle: 'Range pastures',
                interactive: true,
                title: '<img src="styles/legend/Rangepastures_1.png" /> Range pastures'
            });
var format_PastureareasintheWUIExtremeHighrisk_2 = new ol.format.GeoJSON();
var features_PastureareasintheWUIExtremeHighrisk_2 = format_PastureareasintheWUIExtremeHighrisk_2.readFeatures(json_PastureareasintheWUIExtremeHighrisk_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PastureareasintheWUIExtremeHighrisk_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PastureareasintheWUIExtremeHighrisk_2.addFeatures(features_PastureareasintheWUIExtremeHighrisk_2);
var lyr_PastureareasintheWUIExtremeHighrisk_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PastureareasintheWUIExtremeHighrisk_2, 
                style: style_PastureareasintheWUIExtremeHighrisk_2,
                popuplayertitle: 'Pasture areas in the WUI (Extreme & High risk)',
                interactive: true,
    title: 'Pasture areas in the WUI (Extreme & High risk)<br />\
    <img src="styles/legend/PastureareasintheWUIExtremeHighrisk_2_0.png" /> Extreme<br />\
    <img src="styles/legend/PastureareasintheWUIExtremeHighrisk_2_1.png" /> High<br />\
    <img src="styles/legend/PastureareasintheWUIExtremeHighrisk_2_2.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Rangepastures_1.setVisible(true);lyr_PastureareasintheWUIExtremeHighrisk_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Rangepastures_1,lyr_PastureareasintheWUIExtremeHighrisk_2];
lyr_Rangepastures_1.set('fieldAliases', {'PSTRE_NAME': 'PSTRE_NAME', });
lyr_PastureareasintheWUIExtremeHighrisk_2.set('fieldAliases', {'FR_CNTRE': 'FR_CNTRE', 'FIRE_ZONE': 'FIRE_ZONE', 'RISK_CLASS': 'RISK_CLASS', 'PSTRE_NAME': 'PSTRE_NAME', 'FR_THRT_CC': 'FR_THRT_CC', 'Area_ha': 'Area_ha', });
lyr_Rangepastures_1.set('fieldImages', {'PSTRE_NAME': 'TextEdit', });
lyr_PastureareasintheWUIExtremeHighrisk_2.set('fieldImages', {'FR_CNTRE': 'TextEdit', 'FIRE_ZONE': 'TextEdit', 'RISK_CLASS': 'Range', 'PSTRE_NAME': 'TextEdit', 'FR_THRT_CC': 'TextEdit', 'Area_ha': '', });
lyr_Rangepastures_1.set('fieldLabels', {'PSTRE_NAME': 'inline label - visible with data', });
lyr_PastureareasintheWUIExtremeHighrisk_2.set('fieldLabels', {'FR_CNTRE': 'header label - visible with data', 'FIRE_ZONE': 'header label - visible with data', 'RISK_CLASS': 'header label - visible with data', 'PSTRE_NAME': 'header label - visible with data', 'FR_THRT_CC': 'header label - visible with data', 'Area_ha': 'header label - visible with data', });
lyr_PastureareasintheWUIExtremeHighrisk_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});