/**
 * Created by Benou on 31/08/2016.
 */

import 'angular'
import 'angular-mocks'

import './src/client/app/app.module'

let context = require.context('./src', true, /\.spec\.js/)
context.keys().forEach(context)
