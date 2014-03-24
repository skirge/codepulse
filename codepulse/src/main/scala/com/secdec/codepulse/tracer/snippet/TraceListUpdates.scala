/*
 * Code Pulse: A real-time code coverage testing tool. For more information
 * see http://code-pulse.com
 *
 * Copyright (C) 2014 Applied Visions - http://securedecisions.avi.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.secdec.codepulse.tracer.snippet

import com.secdec.codepulse.util.comet.PublicCometInit
import com.secdec.codepulse.tracer.TraceManager

import net.liftweb.http.js.JE.JsFunc
import net.liftweb.http.js.JE.JsVar
import net.liftweb.http.js.JsCmds.jsExpToJsCmd
import net.liftweb.http.js.JsExp.strToJsExp
import net.liftweb.http.js.jquery.JqJE.Jq
import reactive.ForeachableForwardable
import reactive.Observing

/** A super simple comet actor that calls `$(document).trigger('traceListUpdated')`
  * whenever the given `traceManager` fires an event on its `traceListUpdates` stream.
  */
class TraceListUpdates(traceManager: TraceManager) extends PublicCometInit with Observing {

	// no visible components
	def render = Nil

	override def localSetup() = {
		super.localSetup()

		traceManager.traceListUpdates ->> partialUpdate {
			Jq(JsVar("document")) ~> JsFunc("trigger", "traceListUpdated")
		}
	}
}